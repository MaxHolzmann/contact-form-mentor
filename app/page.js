import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col">
        <h1 className="">Contact Us</h1>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
            <label>Last Name</label>
            <input type="text" id="last-name" name="last-name" />
          </div>

          <div>
            <label>Email</label>
            <input type="email" id="email" name="email" />
          </div>

          <div>
            <label>Query Type</label>
            <input type="radio" id="query-type" name="query-type" />
            <label>General</label>
            <input type="radio" id="query-type" name="query-type" />
            <label>General</label>
          </div>

          <div>
            <label>Message</label>
            <textarea id="message" name="message"></textarea>
          </div>

          <div>
            <input type="checkbox"></input>
            <label>I Consent</label>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </main>
  );
}
