export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-100">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3 md:px-6">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Портфолио группы АУБ-1-24</h3>
          <p className="text-sm text-slate-300">
            Официальная витрина достижений студентов кафедры ПИиИБ, Института МФТИТ ОшГУ.
          </p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-semibold">Контакты</p>
          <p>Ошский Государственный университет, Ош</p>
          <p>aub124@oshsu.kg</p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-semibold">Разделы</p>
          <p>Студенты · Новости · Путешествия · Кабинет · Админ</p>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-400">
        © 2025 АУБ-1-24 · Ошский Государственный университет · Институт МФТИТ · Кафедра ПИиИБ
      </div>
    </footer>
  );
}
