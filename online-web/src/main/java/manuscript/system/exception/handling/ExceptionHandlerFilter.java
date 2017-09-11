package manuscript.system.exception.handling;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.filter.OncePerRequestFilter;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import manuscript.system.seucurity.reply.BaseReply;
import manuscript.system.seucurity.reply.Message;

public class ExceptionHandlerFilter extends OncePerRequestFilter {

	private static Logger LOGGER = LoggerFactory.getLogger(ExceptionHandlerFilter.class);

	@Override
	public void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {

		try {
			filterChain.doFilter(request, response);
		} catch (Exception e) {
			LOGGER.error("Unexpected server error: ", e);

			BaseReply reply = new BaseReply();
			Message message = new Message();

			message.setText("Unexpected server error occurred. Please try again later.");
			reply.getMessages().add(message);
			reply.setSuccess(false);

			response.setStatus(HttpStatus.INTERNAL_SERVER_ERROR.value());
			response.getWriter().write(convertObjectToJson(reply));
		}
	}

	public String convertObjectToJson(Object object) throws JsonProcessingException {
		if (object == null) {
			return null;
		}
		ObjectMapper mapper = new ObjectMapper();
		return mapper.writeValueAsString(object);
	}
}
