
export default async function UserDataTable() {
    const response = await fetch('http://localhost:3000/api/user/random',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log("결과값:",  response);
    const data = await response.text();
    
    return (
        <div>
            {data}
        </div>
    );
}