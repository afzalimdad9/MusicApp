
// Utilities
import { SUCCESSFUL, UNAUTHORIZED } from '@/core/constants/codes'


export async function POST(req: Request) {

    // Get passed data
    const body = await req.json()

    try {
        // Compare user credentials here.
        
        return new Response('Login successfully', {status: SUCCESSFUL})
        
    } catch (e) {
        console.error(e)
        return new Response('Login failed', {status: UNAUTHORIZED})
    }
}