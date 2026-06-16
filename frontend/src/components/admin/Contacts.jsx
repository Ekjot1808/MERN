import { useEffect, useState } from "react";

function Contacts() {
    const [contacts, setContacts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        async function fetchContacts() {
            const res = await fetch(
                `http://localhost:5000/api/admin/contacts?page=${page}`,
                {
                    method: "GET",
                    credentials: "include",
                }
            );

            const data = await res.json();

            setContacts(data.contacts);
            setTotalPages(data.totalPages);
        }

        fetchContacts();
    }, [page]);

    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-4xl font-bold">Contacts</h1>

                <p className="text-base-content/70 mt-2">
                    Manage contact messages from users.
                </p>
            </div>

            {/* Table */}
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Message</th>
                                </tr>
                            </thead>

                            <tbody>
                                {contacts.map((contact, index) => (
                                    <tr key={contact._id}>
                                        <th>{index + 1}</th>

                                        <td>{contact.name}</td>

                                        <td>{contact.email}</td>

                                        <td className="max-w-md whitespace-normal wrap-break-word">
                                            {contact.message}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="flex justify-center mt-6">
                        <div className="join">
                            <button
                                className="join-item btn"
                                disabled={page === 1}
                                onClick={() => setPage(page - 1)}
                            >
                                Previous
                            </button>

                            {[...Array(totalPages)].map((_, index) => (
                                <button
                                    key={index}
                                    className={`join-item btn ${page === index + 1 ? "btn-active" : ""
                                        }`}
                                    onClick={() => setPage(index + 1)}
                                >
                                    {index + 1}
                                </button>
                            ))}

                            <button
                                className="join-item btn"
                                disabled={page === totalPages}
                                onClick={() => setPage(page + 1)}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;