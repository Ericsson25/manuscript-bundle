#
CREATE TABLE USR_ALIAS(
	USER_ID INT(5) UNSIGNED NOT NULL AUTO_INCREMENT,
	USERNAME VARCHAR(50) NOT NULL UNIQUE,
	PRIMARY KEY (USER_ID)
);
#
#
CREATE TABLE USR_USER(
	USER_ID INT(5) UNSIGNED NOT NULL,
	TITLE VARCHAR(10),
	FIRST_NAME VARCHAR(50) NOT NULL,
	LAST_NAME VARCHAR(50) NOT NULL,
	EMAIL VARCHAR(100) NOT NULL,
	JOB VARCHAR(100) NOT NULL,
	PRIMARY KEY (USER_ID),
	FOREIGN KEY (USER_ID) REFERENCES USR_ALIAS(USER_ID)
);
#
#
CREATE TABLE USR_PASSWORD(
	PASSWORD_ID INT(5) UNSIGNED NOT NULL AUTO_INCREMENT,
	USER_ID INT(5) UNSIGNED NOT NULL,
	PASSWORD VARCHAR(150) NOT NULL,
	CREATIONDATE DATE NOT NULL,
	EXPIRYDATE DATE DEFAULT NULL,
	PRIMARY KEY (PASSWORD_ID),
	FOREIGN KEY (USER_ID) REFERENCES USR_ALIAS(USER_ID)
);
#
#
CREATE TABLE USR_ROLES(
	ROLE_ID INT(1) UNSIGNED NOT NULL,
	USER_ID INT(5) UNSIGNED NOT NULL,
	PRIMARY KEY (ROLE_ID,USER_ID),
	FOREIGN KEY (ROLE_ID) REFERENCES ROLE(ROLE_ID),
	FOREIGN KEY (USER_ID) REFERENCES USR_ALIAS(USER_ID)
);
#
#
CREATE TABLE USR_ACADEMICDISCIPLINES(
        ID INT(5) UNSIGNED NOT NULL AUTO_INCREMENT,
        ACADEMIC_DISCIPLINES_ID VARCHAR(20) NOT NULL,
        USER_ID INT(5) UNSIGNED NOT NULL,
        PRIMARY KEY (ID),
        FOREIGN KEY (ACADEMIC_DISCIPLINES_ID) REFERENCES ACADEMIC_DISCIPLINES (ACADEMIC_DISCIPLINES_ID),
        FOREIGN KEY (USER_ID) REFERENCES USR_ALIAS (USER_ID)
);
#