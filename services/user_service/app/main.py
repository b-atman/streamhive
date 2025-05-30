# user_service/app/main.py

from fastapi import FastAPI
from app.core.database import Base, engine
from app.models import user  # Ensures model metadata is registered
from app.api.routes import user as user_routes

# Create tables based on models
Base.metadata.create_all(bind=engine)

# Initialize FastAPI app
app = FastAPI()

# Include the user router
app.include_router(user_routes.router, tags=["Users"])

