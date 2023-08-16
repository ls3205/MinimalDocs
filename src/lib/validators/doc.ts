import { z } from "zod"

export const DocCreateValidator = z.object({
    title: z.string().min(1).max(190),
    content: z.string().min(0).max(65535)
})

export const DocUpdateValidator = z.object({
    id: z.string(),
    title: z.string().min(1).max(190),
    content: z.string().min(0).max(65535)
})

export type CreateDocPayload = z.infer<typeof DocCreateValidator>

export type UpdateDocPayload = z.infer<typeof DocUpdateValidator>