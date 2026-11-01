<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the clinic's supplied WebP photos as separate files in `public/images/` and reference them by path; this avoids embedding large data URLs in page source.
- Scope landing-page semantic variables to a high-specificity `.clinic-page` override after `.dark` and force light color-scheme; this prevents inherited themes from changing the clinic's presentation.
