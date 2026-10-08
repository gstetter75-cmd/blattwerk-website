/**
 * Reference-counted body scroll lock.
 *
 * Several overlays can be open at once (e.g. the search dialog on top of the
 * mobile menu). Each caller takes its own lock and the page only becomes
 * scrollable again once every lock has been released, in any order.
 */

let activeLocks = 0;
let overflowBeforeLock = '';

/** Locks page scrolling and returns a function that releases this lock. */
export function lockBodyScroll(): () => void {
  if (typeof document === 'undefined') return () => {};

  if (activeLocks === 0) {
    overflowBeforeLock = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
  }
  activeLocks += 1;

  let released = false;
  return () => {
    if (released) return;
    released = true;
    activeLocks -= 1;
    if (activeLocks === 0) document.body.style.overflow = overflowBeforeLock;
  };
}
