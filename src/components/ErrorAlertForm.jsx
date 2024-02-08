/* eslint-disable react/prop-types */
const ErrorAlertForm = ({children}) => {
    return (
        <div className="py-2 text-left text-slate-100 pl-4 mb-1 font-bold bg-red-700 rounded-md">
            {children}
        </div>
    );
};

export default ErrorAlertForm;
