// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest';
import { lockBodyScroll } from '@/lib/scroll-lock';

describe('lockBodyScroll', () => {
  beforeEach(() => {
    document.body.style.overflow = '';
  });

  it('locks and releases page scrolling', () => {
    const release = lockBodyScroll();
    expect(document.body.style.overflow).toBe('hidden');
    release();
    expect(document.body.style.overflow).toBe('');
  });

  it('keeps the page locked until every nested lock is released', () => {
    const releaseMenu = lockBodyScroll();
    const releaseSearch = lockBodyScroll();
    releaseSearch();
    expect(document.body.style.overflow).toBe('hidden');
    releaseMenu();
    expect(document.body.style.overflow).toBe('');
  });

  it('handles locks released out of order', () => {
    const releaseMenu = lockBodyScroll();
    const releaseSearch = lockBodyScroll();
    releaseMenu();
    expect(document.body.style.overflow).toBe('hidden');
    releaseSearch();
    expect(document.body.style.overflow).toBe('');
  });

  it('ignores repeated calls of the same release function', () => {
    const releaseMenu = lockBodyScroll();
    const releaseSearch = lockBodyScroll();
    releaseSearch();
    releaseSearch();
    expect(document.body.style.overflow).toBe('hidden');
    releaseMenu();
    expect(document.body.style.overflow).toBe('');
  });

  it('restores an overflow value that was set before the first lock', () => {
    document.body.style.overflow = 'scroll';
    const release = lockBodyScroll();
    release();
    expect(document.body.style.overflow).toBe('scroll');
  });
});
