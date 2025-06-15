import { Link } from "react-router-dom";
import xIcon from "../../assets/xIcon.svg";

const Dialog = ({
  navigationDestination,
  closeModal,
  title,
  description,
}: {
  navigationDestination: string;
  closeModal: () => void;
  title: string;
  description?: string;
}) => {
  return (
    <div>
      <div
        className="relative z-10"
        aria-labelledby="dialog-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          className="fixed inset-0 bg-gray-500 opacity-10"
          aria-hidden="true"
          onClick={closeModal}
        ></div>
        <div className="fixed inset-0">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <div className="flex items-center justify-between">
                      <h3
                        className="text-base font-semibold text-gray-900"
                        id="dialog-title"
                      >
                        About {title}
                      </h3>
                      <div
                        className="w-4 h-4 cursor-pointer"
                        onClick={closeModal}
                      >
                        <img src={xIcon} alt="close modal button" />
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">{description}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <Link
                  type="button"
                  className="inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white hover:bg-gray-100 sm:ml-3 sm:w-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                  to={navigationDestination}
                >
                  Take me there
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
