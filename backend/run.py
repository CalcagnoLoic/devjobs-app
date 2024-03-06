import argparse
from subprocess import call
from app import app

def main():
    parser = argparse.ArgumentParser(description="Custom commands for Flask app")
    parser.add_argument("command", choices=["run"], help="Command to execute")

    args = parser.parse_args()

    if args.command == "run":
        app.run()

if __name__ == "__main__":
    main()