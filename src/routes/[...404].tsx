import { A } from "@solidjs/router";
import { HttpStatusCode } from "@solidjs/start";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function NotFound() {
  <HttpStatusCode code={418} />

  return (
    <main class="flex flex-col items-center justify-center min-h-screen mx-auto pb-4">
      <h1 style={{ "font-size": "3rem" }}>418 - I'm a teapot</h1>
      <p style={{ "font-size": "1.5rem" }}>
        <A href="/">Go home, you're drunk</A>
      </p>
      <p style={{ "font-size": "1.5rem" }}>
        It seems like you've found the teapot. Unfortunately, I can't brew coffee!
      </p>
    </main>
  );
}
