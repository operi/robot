# robot

### Considerations:
    - Could have used a Strategy pattern to implement the robot's movement and
      action parsing, but seemed overkill in this case.
    - This is my first time setting up a NodeJS project, and have virtually no
      previous experience with the framework/tooling around it.

### Installing:
    1 - Clone this repository
    2 -  Run 'npm i'
    3 - Run 'npx tsc index.ts robot.ts'
    4 - Run 'node index.ts'
    5 - Modify 'commands.txt' as you desire
    6 - Repeat 3, 4 and 5 as long as you want

### Improvements that could be made:
    - Could use a database to store robot's position and easier reusability.
    - When setting a database, using Docker to build a container for the app and another one for the database could
      be really useful.
    - Set up Docker Compose to ease both containers management.