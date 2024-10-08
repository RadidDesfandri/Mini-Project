import { EventController } from "@/controllers/event.controller";
import { uploader } from "@/helpers/uploader";
import { Router } from "express";

export class EventRouter {
    private router: Router;
    private eventController: EventController;

    constructor() {
        this.eventController = new EventController();
        this.router = Router()
        this.initializeRouter()
    }

    private initializeRouter(): void {
        this.router.get('/', this.eventController.getEvent)
        this.router.post('/:id', uploader("event", "/event").single("file"), this.eventController.createEvent)
        this.router.get('/:id', this.eventController.getEventById)
    }

    getRouter(): Router {
        return this.router;
    }
}