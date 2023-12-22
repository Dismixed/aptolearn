export async function POST(request) {
    const { body } = request
    const { email } = body
    fetch('https://api.getwaitlist.com/api/v1/signup', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(
            {
                "email": email,
                "waitlist_id": 12369
            }
        ),
    }).then((response) => {
        return response.json()
    });
}


export async function OPTIONS(request) {
    const allowedOrigin = request.headers.get("origin");
    const response = new Response(null, {
        status: 200,
        headers: {
            "Access-Control-Allow-Origin": allowedOrigin || "*",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers":
                "Content-Type, Authorization, application/json, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version",
            "Access-Control-Max-Age": "86400",
        },
    });

    return response;
}

