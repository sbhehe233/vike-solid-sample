import { Link } from "/components/link";
import styles from "./style.module.scss";

export default function Page() {
  let modalRef: HTMLDialogElement;

  return (
    <div class="space-y-3">
      <p class="text-4xl">Welcome</p>
      <h1 class="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-200 to-purple-500">
        Rendered to HTML.
      </h1>

      <div class="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div class="collapse-title text-xl font-medium">
          <Link href="/feeds">SSR</Link>
        </div>
        <div class="collapse-content">
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Rendering contents with SSR
          </p>
          <p>
            <Link href="/feeds">SSR</Link>
          </p>
        </div>
      </div>
      <div class="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div class="collapse-title text-xl font-medium">
          <Link href="/feeds">SSR with Dynamic Routes</Link>
        </div>
        <div class="collapse-content">
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Rendering contents with SSR with Dynamic Routes
          </p>
          <p>
            <Link href="/users">SSR</Link>
          </p>
        </div>
      </div>
      <div class="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div class="collapse-title text-xl font-medium">
          <Link href="/counter">SSR+interactive</Link>
        </div>
        <div class="collapse-content">
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Rendering contents with SSR with interactive components
          </p>
          <p>
            <Link href="/counter">SSR+interactive</Link>
          </p>
        </div>
      </div>
      <div class="flex justify-end">
        <button
          class="btn btn-outline btn-primary btn-wide"
          onclick={() => modalRef?.showModal()}
        >
          See Terms
        </button>
      </div>
      <dialog ref={modalRef} class="modal">
        <div class="modal-box">
          <div class="relative w-full max-w-2xl max-h-full">
            <div class="relative">
              <div class="flex items-start justify-between">
                <h3 class="text-xl font-semibold ">Terms of Service</h3>
              </div>
              <div class="p-6 space-y-6">
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  With less than a month to go before the European Union enacts
                  new consumer privacy laws for its citizens, companies around
                  the world are updating their terms of service agreements to
                  comply.
                </p>
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  The European Union’s General Data Protection Regulation
                  (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                  common set of data rights in the European Union. It requires
                  organizations to notify users as soon as possible of high-risk
                  data breaches that could personally affect them.
                </p>
              </div>
              <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  onclick={() => modalRef?.close()}
                  type="button"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  I accept
                </button>
                <button
                  onclick={() => modalRef?.close()}
                  type="button"
                  class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        </div>
        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <div class={styles["hide"]}>You can not see me!</div>
    </div>
  );
}
