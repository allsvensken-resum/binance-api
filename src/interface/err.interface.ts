export interface AppError {
    message: string
}

export const internalServerError: AppError = {
    message: "Internal server error"
}