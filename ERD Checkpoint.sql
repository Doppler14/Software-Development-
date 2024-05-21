CREATE TABLE Gymnasium (
    GymnasiumID INT PRIMARY KEY,
    Name VARCHAR(255),
    Address VARCHAR(255),
    PhoneNumber VARCHAR(20)
);

CREATE TABLE Member (
    MemberID INT PRIMARY KEY,
    LastName VARCHAR(255),
    FirstName VARCHAR(255),
    Address VARCHAR(255),
    DateOfBirth DATE,
    Gender ENUM('Male', 'Female', 'Other'),
    GymnasiumID INT,
    FOREIGN KEY (GymnasiumID) REFERENCES Gymnasium(GymnasiumID)
);

CREATE TABLE Session (
    SessionID INT PRIMARY KEY,
    SportType VARCHAR(255),
    Schedule DATETIME,
    MaxMembers INT
);

CREATE TABLE Coach (
    CoachID INT PRIMARY KEY,
    LastName VARCHAR(255),
    FirstName VARCHAR(255),
    Age INT,
    Specialty VARCHAR(255)
);

CREATE TABLE Registration (
    RegistrationID INT PRIMARY KEY,
    MemberID INT,
    SessionID INT,
    FOREIGN KEY (MemberID) REFERENCES Member(MemberID),
    FOREIGN KEY (SessionID) REFERENCES Session(SessionID)
);

CREATE TABLE SessionCoach (
    SessionCoachID INT PRIMARY KEY,
    SessionID INT,
    CoachID INT,
    FOREIGN KEY (SessionID) REFERENCES Session(SessionID),
    FOREIGN KEY (CoachID) REFERENCES Coach(CoachID)
);
