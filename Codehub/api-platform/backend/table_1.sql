USE api_platform;

CREATE TABLE apis (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  code TEXT,
  language VARCHAR(50)
);

