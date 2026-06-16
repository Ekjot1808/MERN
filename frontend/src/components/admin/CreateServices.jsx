import { toast } from "react-toastify";

function CreateService() {

    const handleSubmit = async (formData) => {
        const formInputData = Object.fromEntries(formData.entries());
        console.log(formInputData);

        const response = await fetch("http://localhost:5000/api/admin/services", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(formInputData),
        });

        const data = await response.json();
        console.log(data);

        toast.success(data.message);
    };

    return (
        <div className="max-w-3xl mx-auto">
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">

                    <h1 className="text-4xl font-bold mb-2">
                        Create Service
                    </h1>

                    <p className="text-base-content/70 mb-6">
                        Add a new service to your website.
                    </p>

                    <form action={handleSubmit} className="space-y-5">

                        {/* Service Name */}
                        <div>
                            <label className="label">
                                <span className="label-text">Service Name</span>
                            </label>

                            <input
                                type="text"
                                name="name"
                                placeholder="Web Development"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        {/* Provider */}
                        <div>
                            <label className="label">
                                <span className="label-text">Provider</span>
                            </label>

                            <input
                                type="text"
                                name="provider"
                                placeholder="Ekjot Singh"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        {/* Price */}
                        <div>
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>

                            <input
                                type="number"
                                name="price"
                                placeholder="$99"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>

                            <textarea
                                name="description"
                                rows="5"
                                placeholder="Describe your service..."
                                className="textarea textarea-bordered w-full"
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary w-full">
                            Create Service
                        </button>

                    </form>

                </div>
            </div>
        </div>
    );
}

export default CreateService;