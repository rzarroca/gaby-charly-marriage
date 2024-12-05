export const Confirmation = () => (
  <form action="" className="common-section grid gap-4 text-left">
    <h2 className="text-center-xl">Confirma tu presencia!</h2>

    <fieldset className="grid gap-2">
      <label htmlFor="asistants">Cuantos son?</label>
      <input
        type="number"
        name="asistants"
        id="asistants"
        min="0"
        max="10"
        step="1"
        className="rounded-sm px-2 py-1 text-secondary"
      />

      <label htmlFor="name">Quienes? *</label>
      <input
        type="text"
        name="name"
        id="name"
        required
        className="rounded-sm px-2 py-1 text-secondary"
      />
    </fieldset>

    <button className="rounded-sm border-2 border-primary px-2 py-1 text-lg md:text-xl">
      Enviar
    </button>
  </form>
);
