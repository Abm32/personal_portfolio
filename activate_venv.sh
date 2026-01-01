#!/usr/bin/env fish
# Activate virtual environment for Fish shell
# Usage: source activate_venv.sh

if test -d "venv"
    source venv/bin/activate.fish
    echo "Virtual environment activated!"
    echo "Python path: "(which python)
else
    echo "Virtual environment not found. Creating one..."
    python3 -m venv venv
    source venv/bin/activate.fish
    echo "Virtual environment created and activated!"
end

