import { useState } from "react";

export const CheckIcon = () => {
  return (
    <svg
      className="size-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Contact = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(label);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const contactItems = [
    {
      label: "Teléfono",
      value: "3182173508",
      icon: (
        <svg
          className="size-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      action: () => copyToClipboard("3182173508", "Teléfono copiado"),
    },
    {
      label: "Correo",
      value: "juanpalaciosc20@gmail.com",
      icon: (
        <svg
          className="size-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      action: () =>
        copyToClipboard("juanpalaciosc20@gmail.com", "Correo copiado"),
    },
    {
      label: "LinkedIn",
      value: "juan-palacios-developer",
      icon: (
        <svg
          className="size-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5H4.5v15H.5v-15zm7.5 0H12v2.1c.57-1.08 2-2.1 4.14-2.1 4.42 0 5.36 2.9 5.36 6.7v8.3H17v-7.4c0-1.76-.03-4.02-2.45-4.02-2.46 0-2.84 1.91-2.84 3.89v7.53H8V8.5z" />
        </svg>
      ),
      link: "https://www.linkedin.com/in/juan-palacios-developer",
    },
    {
      label: "GitHub",
      value: "juanpalacios20",
      icon: (
        <svg
          className="size-6 text-black dark:text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.3-3.9-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 3 .9.1-.7.3-1.1.6-1.4-2.5-.3-5.1-1.2-5.1-5.3 0-1.2.4-2.1 1.1-2.9-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 .9a10.3 10.3 0 0 1 5.5 0c2-.1 3-.9 3-.9.6 1.5.2 2.6.1 2.9.7.8 1.1 1.8 1.1 2.9 0 4.1-2.6 5-5.1 5.3.4.3.7.9.7 1.9v2.8c0 .3.2.7.8.6A10.5 10.5 0 0 0 23.5 12C23.5 5.7 18.3.5 12 .5Z" />
        </svg>
      ),
      link: "https://github.com/juanpalacios20",
    },
  ];

  return (
    <section className="flex flex-col gap-6 items-center justify-center py-8">
      <h2 className="text-2xl font-bold text-center">Métodos de contacto</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl">
        {contactItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 border rounded-xl p-4 text-center font-medium shadow-md bg-white/10 backdrop-blur-sm hover:scale-105 transition duration-200 ease-in-out"
            style={{ borderColor: "#0072F5" }}
          >
            {item.icon}
            {item.link ? (
              <a
                className="text-blue-500 hover:underline break-words"
                href={item.link}
                rel="noopener noreferrer"
                target="_blank"
              >
                {item.value}
              </a>
            ) : (
              <>
                <span className="break-words">{item.value}</span>
                <button
                  onClick={item.action}
                  className="text-sm text-gray-500 hover:text-blue-500"
                >
                  Copiar
                </button>
                {copied === `Correo copiado` && index === 1 && (
                  <span className="text-blue-500 text-xs">Copiado</span>
                )}
                {copied === `Teléfono copiado` && index === 0 && (
                  <span className="text-blue-500 text-xs">Copiado</span>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
