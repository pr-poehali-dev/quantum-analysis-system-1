import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const figmaProjects = [
  "Редизайн главной страницы",
  "Мобильное приложение v2.0",
  "Иконки для онбординга",
  "Дашборд аналитики",
  "Логотип для клиента",
];

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [projectIndex, setProjectIndex] = useState(0);
  const [elapsed, setElapsed] = useState(37);

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsed((e) => e + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const rotator = setInterval(() => {
      setProjectIndex((i) => (i + 1) % figmaProjects.length);
      setElapsed(0);
    }, 5000);
    return () => clearInterval(rotator);
  }, []);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return m > 0 ? `${m}м ${sec}с прошло` : `${sec}с прошло`;
  };

  return (
    <div className="min-h-screen bg-[#36393f] text-white overflow-x-hidden">
      {/* Навигация в стиле Discord */}
      <nav className="bg-[#2f3136] border-b border-[#202225] px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#5865f2] rounded-full flex items-center justify-center">
              <Icon name="Monitor" size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-white">Дискордик</h1>
              <p className="text-xs text-[#b9bbbe] hidden sm:block">Rich Presence для Figma в Discord</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <Button variant="ghost" className="text-[#b9bbbe] hover:text-white hover:bg-[#40444b]">
              <Icon name="Github" size={16} className="mr-2" />
              GitHub
            </Button>
            <Button className="bg-[#5865f2] hover:bg-[#4752c4] text-white px-6 py-2 rounded text-sm font-medium">
              Скачать бесплатно
            </Button>
          </div>
          <Button
            variant="ghost"
            className="sm:hidden text-[#b9bbbe] hover:text-white hover:bg-[#40444b] p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={20} />
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="sm:hidden mt-4 pt-4 border-t border-[#202225]">
            <div className="flex flex-col gap-3">
              <Button variant="ghost" className="text-[#b9bbbe] hover:text-white hover:bg-[#40444b] justify-start">
                <Icon name="Github" size={16} className="mr-2" />
                GitHub
              </Button>
              <Button className="bg-[#5865f2] hover:bg-[#4752c4] text-white px-6 py-2 rounded text-sm font-medium">
                Скачать бесплатно
              </Button>
            </div>
          </div>
        )}
      </nav>

      <div className="flex min-h-screen">
        {/* Боковая панель серверов */}
        <div className="hidden lg:flex w-[72px] bg-[#202225] flex-col items-center py-3 gap-2">
          <div className="w-12 h-12 bg-[#5865f2] rounded-2xl hover:rounded-xl transition-all duration-200 flex items-center justify-center cursor-pointer">
            <Icon name="Monitor" size={24} className="text-white" />
          </div>
          <div className="w-8 h-[2px] bg-[#36393f] rounded-full"></div>
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-12 h-12 bg-[#36393f] rounded-3xl hover:rounded-xl transition-all duration-200 flex items-center justify-center cursor-pointer hover:bg-[#5865f2]"
            >
              <span className="text-[#dcddde] text-sm font-medium">{i}</span>
            </div>
          ))}
        </div>

        <div className="flex-1 flex flex-col lg:flex-row">
          {/* Боковая панель каналов */}
          <div className={`${mobileSidebarOpen ? "block" : "hidden"} lg:block w-full lg:w-60 bg-[#2f3136] flex flex-col`}>
            <div className="p-4 border-b border-[#202225] flex items-center justify-between">
              <h2 className="text-white font-semibold text-base">Сервер Дискордик</h2>
              <Button
                variant="ghost"
                className="lg:hidden text-[#b9bbbe] hover:text-white hover:bg-[#40444b] p-1"
                onClick={() => setMobileSidebarOpen(false)}
              >
                <Icon name="X" size={16} />
              </Button>
            </div>
            <div className="flex-1 p-2">
              <div className="mb-4">
                <div className="flex items-center gap-1 px-2 py-1 text-[#8e9297] text-xs font-semibold uppercase tracking-wide">
                  <Icon name="ChevronRight" size={12} />
                  <span>Текстовые каналы</span>
                </div>
                <div className="mt-1 space-y-0.5">
                  {["общий", "новости", "витрина", "помощь"].map((channel) => (
                    <div
                      key={channel}
                      className={`flex items-center gap-1.5 px-2 py-1 rounded cursor-pointer ${channel === "витрина" ? "bg-[#40444b] text-white" : "text-[#8e9297] hover:text-[#dcddde] hover:bg-[#393c43]"}`}
                    >
                      <Icon name="Hash" size={16} />
                      <span className="text-sm">{channel}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 px-2 py-1 text-[#8e9297] text-xs font-semibold uppercase tracking-wide">
                  <Icon name="ChevronRight" size={12} />
                  <span>Голосовые каналы</span>
                </div>
                <div className="mt-1 space-y-0.5">
                  {["Общий", "Обзор дизайна"].map((channel) => (
                    <div
                      key={channel}
                      className="flex items-center gap-1.5 px-2 py-1 rounded text-[#8e9297] hover:text-[#dcddde] hover:bg-[#393c43] cursor-pointer"
                    >
                      <Icon name="Mic" size={16} />
                      <span className="text-sm">{channel}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-2 bg-[#292b2f] flex items-center gap-2">
              <div className="w-8 h-8 bg-[#5865f2] rounded-full flex items-center justify-center relative">
                <span className="text-white text-sm font-medium">А</span>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#3ba55c] border-2 border-[#292b2f] rounded-full"></div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white text-sm font-medium truncate">Алексей</div>
                <div className="text-[#3ba55c] text-xs truncate">Работает в Figma</div>
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-[#40444b]">
                  <Icon name="Mic" size={16} className="text-[#b9bbbe]" />
                </Button>
                <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-[#40444b]">
                  <Icon name="Settings" size={16} className="text-[#b9bbbe]" />
                </Button>
              </div>
            </div>
          </div>

          {/* Область чата */}
          <div className="flex-1 flex flex-col">
            <div className="h-12 bg-[#36393f] border-b border-[#202225] flex items-center px-4 gap-2">
              <Button
                variant="ghost"
                className="lg:hidden text-[#8e9297] hover:text-[#dcddde] hover:bg-[#40444b] p-1 mr-2"
                onClick={() => setMobileSidebarOpen(true)}
              >
                <Icon name="Menu" size={20} />
              </Button>
              <Icon name="Hash" size={20} className="text-[#8e9297]" />
              <span className="text-white font-semibold">витрина</span>
              <div className="w-px h-6 bg-[#40444b] mx-2 hidden sm:block"></div>
              <span className="text-[#8e9297] text-sm hidden sm:block">Покажи коллегам, над чем ты работаешь прямо сейчас</span>
              <div className="ml-auto flex items-center gap-2 sm:gap-4">
                <Icon name="Bell" size={20} className="text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
                <Icon name="Users" size={20} className="text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
                <Icon name="Search" size={20} className="text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
              </div>
            </div>

            <div className="flex-1 p-2 sm:p-4 space-y-4 sm:space-y-6 overflow-y-auto">
              {/* Приветственное сообщение бота */}
              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#5865f2] rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Monitor" size={18} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-medium text-sm sm:text-base">Дискордик Бот</span>
                    <span className="bg-[#5865f2] text-white text-xs px-1.5 py-0.5 rounded">БОТ</span>
                    <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня в 12:00</span>
                  </div>
                  <div className="text-[#dcddde] text-sm sm:text-base">
                    <p className="mb-3 sm:mb-4">
                      👋 <strong>Привет! Я — Дискордик.</strong> Пока ты работаешь в Figma, я автоматически обновляю твой статус в Discord — коллеги видят название файла и сколько времени ты уже в потоке.
                    </p>
                    <div className="bg-[#2f3136] border-l-4 border-[#5865f2] p-3 sm:p-4 rounded">
                      <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">Что я умею:</h3>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-[#b9bbbe]">
                        <li className="flex items-center gap-2"><span className="text-[#5865f2]">▸</span> Автоматически определяю Figma в браузере и приложении</li>
                        <li className="flex items-center gap-2"><span className="text-[#5865f2]">▸</span> Показываю название текущего проекта/файла</li>
                        <li className="flex items-center gap-2"><span className="text-[#5865f2]">▸</span> Обновляю статус каждые 5 секунд в реальном времени</li>
                        <li className="flex items-center gap-2"><span className="text-[#5865f2]">▸</span> Убираю статус, когда ты закрываешь Figma</li>
                        <li className="flex items-center gap-2"><span className="text-[#5865f2]">▸</span> Работаю на Windows, macOS и Linux</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Сообщение пользователя с Rich Presence */}
              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs sm:text-sm font-medium">М</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-medium text-sm sm:text-base">Мария Дизайнер</span>
                    <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня в 12:05</span>
                  </div>
                  <div className="text-[#dcddde] mb-3 text-sm sm:text-base">
                    Устанавила Дискордик — теперь все видят, что я работаю 🔥
                  </div>

                  {/* Демо Rich Presence — живое */}
                  <div className="bg-[#2f3136] border border-[#202225] rounded-lg overflow-hidden w-full max-w-sm">
                    <div className="h-16 sm:h-20 bg-gradient-to-r from-[#5865f2] to-[#7c3aed] relative">
                      <div className="absolute -bottom-3 sm:-bottom-4 left-3 sm:left-4">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-[#2f3136] bg-[#36393f] overflow-hidden relative">
                          <div className="w-full h-full bg-gradient-to-br from-[#4f46e5] to-[#7c3aed] flex items-center justify-center">
                            <span className="text-2xl font-bold text-white">M</span>
                          </div>
                          <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 sm:w-6 sm:h-6 bg-[#3ba55c] border-4 border-[#2f3136] rounded-full"></div>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-[#4f545c] hover:bg-[#5d6269] text-white text-xs px-2 sm:px-3 py-1 rounded"
                      >
                        <Icon name="Settings" size={12} className="mr-1" />
                        <span className="hidden sm:inline">Профиль</span>
                      </Button>
                    </div>

                    <div className="pt-6 sm:pt-8 px-3 sm:px-4 pb-3 sm:pb-4">
                      <div className="mb-3 sm:mb-4">
                        <h3 className="text-white text-lg sm:text-xl font-bold mb-1">Мария</h3>
                        <div className="flex items-center gap-2 text-[#b9bbbe] text-xs sm:text-sm">
                          <span>maria_design</span>
                          <span>·</span>
                          <span className="text-[#3ba55c]">В сети</span>
                        </div>
                      </div>

                      {/* Статусное сообщение */}
                      <div className="mb-3 sm:mb-4 bg-[#36393f] rounded-lg p-2 sm:p-3">
                        <div className="flex items-center gap-2 text-[#dcddde] text-xs sm:text-sm">
                          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#5865f2] rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-xs text-white font-bold">✦</span>
                          </div>
                          <span>В потоке 🎨</span>
                        </div>
                      </div>

                      <div className="flex border-b border-[#40444b] mb-3 sm:mb-4">
                        <button className="px-3 sm:px-4 py-2 text-[#8e9297] text-xs sm:text-sm font-medium hover:text-[#dcddde]">
                          Обо мне
                        </button>
                        <button className="px-3 sm:px-4 py-2 text-white text-xs sm:text-sm font-medium border-b-2 border-[#5865f2]">
                          Активность
                        </button>
                      </div>

                      {/* Живая активность */}
                      <div>
                        <div className="flex items-center gap-2 text-[#8e9297] text-xs font-semibold uppercase tracking-wide mb-2 sm:mb-3">
                          <div className="w-2 h-2 bg-[#3ba55c] rounded-full animate-pulse"></div>
                          <span>Работает в Figma</span>
                        </div>

                        <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-[#36393f] rounded-lg">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#ff7262] to-[#f24e1e] rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.015-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148z" />
                            </svg>
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="text-white font-semibold text-xs sm:text-sm mb-1">Дискордик</div>
                            <div
                              key={projectIndex}
                              className="text-[#dcddde] text-xs sm:text-sm mb-1 transition-all duration-500"
                            >
                              {figmaProjects[projectIndex]}
                            </div>
                            <div className="text-[#b9bbbe] text-xs sm:text-sm mb-2">Figma Desktop</div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-[#3ba55c] rounded-full animate-pulse"></div>
                              <span className="text-[#3ba55c] text-xs font-medium">{formatTime(elapsed)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Второй пользователь */}
              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs sm:text-sm font-medium">И</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-medium text-sm sm:text-base">Иван UX</span>
                    <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня в 12:08</span>
                  </div>
                  <div className="text-[#dcddde] text-sm sm:text-base">
                    Поставил за 2 минуты, работает из коробки 👌 Наконец-то коллеги не пишут «ты занят?» — сами видят
                  </div>
                </div>
              </div>

              {/* Секция "Начало работы" */}
              <div className="bg-[#2f3136] border border-[#202225] rounded-lg p-4 sm:p-6 mt-6 sm:mt-8">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Icon name="Rocket" size={24} className="text-[#5865f2]" />
                  Запусти за 3 шага
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#5865f2] rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-sm sm:text-base">1</span>
                    </div>
                    <h3 className="text-white font-medium mb-2 text-sm sm:text-base">Скачай приложение</h3>
                    <p className="text-[#b9bbbe] text-xs sm:text-sm">Windows, macOS или Linux — один дистрибутив</p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#5865f2] rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-sm sm:text-base">2</span>
                    </div>
                    <h3 className="text-white font-medium mb-2 text-sm sm:text-base">Авторизуй Discord</h3>
                    <p className="text-[#b9bbbe] text-xs sm:text-sm">Безопасный вход через OAuth — пароль не нужен</p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#5865f2] rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-sm sm:text-base">3</span>
                    </div>
                    <h3 className="text-white font-medium mb-2 text-sm sm:text-base">Открой Figma</h3>
                    <p className="text-[#b9bbbe] text-xs sm:text-sm">Статус обновится автоматически — магия!</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button className="bg-[#5865f2] hover:bg-[#4752c4] text-white px-6 sm:px-8 py-2 sm:py-3 rounded text-sm font-medium">
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать Дискордик — бесплатно
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#4f545c] text-[#b9bbbe] hover:bg-[#40444b] hover:border-[#6d6f78] px-6 sm:px-8 py-2 sm:py-3 rounded text-sm font-medium bg-transparent"
                  >
                    <Icon name="Github" size={16} className="mr-2" />
                    Открыть на GitHub
                  </Button>
                </div>
              </div>

              {/* Преимущества */}
              <div className="bg-[#2f3136] border border-[#202225] rounded-lg p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Почему дизайнеры выбирают Дискордик?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {[
                    {
                      icon: "Zap",
                      title: "Работает мгновенно",
                      desc: "Определяет Figma в браузере и приложении без настроек",
                    },
                    {
                      icon: "Eye",
                      title: "Умное отслеживание",
                      desc: "Показывает название файла и проекта — без лишнего",
                    },
                    {
                      icon: "RefreshCw",
                      title: "Обновление каждые 5с",
                      desc: "Статус всегда актуален, пока ты в Figma",
                    },
                    {
                      icon: "ShieldCheck",
                      title: "Никаких данных",
                      desc: "Приватность прежде всего — ничего не собираем",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded hover:bg-[#36393f] transition-colors"
                    >
                      <Icon name={feature.icon} size={18} className="text-[#5865f2] mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-white font-medium text-xs sm:text-sm">{feature.title}</div>
                        <div className="text-[#b9bbbe] text-xs sm:text-sm">{feature.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Финальный CTA */}
              <div className="bg-gradient-to-r from-[#5865f2]/20 to-[#7c3aed]/20 border border-[#5865f2]/30 rounded-lg p-6 sm:p-8 text-center">
                <div className="text-4xl mb-3">🎨</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Покажи коллегам, что ты в потоке</h3>
                <p className="text-[#b9bbbe] text-sm sm:text-base mb-6 max-w-md mx-auto">
                  Более 5000 дизайнеров уже используют Дискордик. Присоединяйся — это бесплатно и всегда будет бесплатным.
                </p>
                <Button className="bg-[#5865f2] hover:bg-[#4752c4] text-white px-8 py-3 rounded text-base font-semibold">
                  <Icon name="Download" size={18} className="mr-2" />
                  Скачать бесплатно
                </Button>
                <p className="text-[#72767d] text-xs mt-3">Open source · MIT лицензия · без рекламы</p>
              </div>
            </div>

            <div className="p-2 sm:p-4">
              <div className="bg-[#40444b] rounded-lg px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2">
                <Icon name="Plus" size={20} className="text-[#8e9297] flex-shrink-0" />
                <span className="text-[#72767d] text-xs sm:text-sm">Сообщение #витрина</span>
              </div>
            </div>
          </div>

          {/* Боковая панель участников */}
          <div className="hidden xl:block w-60 bg-[#2f3136] p-4">
            <div className="mb-4">
              <h3 className="text-[#8e9297] text-xs font-semibold uppercase tracking-wide mb-2">В сети — 3</h3>
              <div className="space-y-2">
                {[
                  {
                    name: "Мария Дизайнер",
                    status: "Работает в Figma",
                    avatar: "М",
                    color: "from-purple-500 to-pink-500",
                    online: true,
                  },
                  {
                    name: "Иван UX",
                    status: "В сети",
                    avatar: "И",
                    color: "from-green-500 to-teal-500",
                    online: true,
                  },
                  {
                    name: "Алексей Разраб",
                    status: "Разрабатывает Дискордик",
                    avatar: "А",
                    color: "from-blue-500 to-purple-500",
                    online: true,
                  },
                ].map((user, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 rounded hover:bg-[#36393f] cursor-pointer">
                    <div
                      className={`w-8 h-8 bg-gradient-to-r ${user.color} rounded-full flex items-center justify-center relative flex-shrink-0`}
                    >
                      <span className="text-white text-sm font-medium">{user.avatar}</span>
                      <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#3ba55c] border-2 border-[#2f3136] rounded-full"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-sm font-medium truncate">{user.name}</div>
                      <div className="text-[#b9bbbe] text-xs truncate">{user.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Оффлайн */}
            <div>
              <h3 className="text-[#8e9297] text-xs font-semibold uppercase tracking-wide mb-2">Офлайн — 2</h3>
              <div className="space-y-2">
                {[
                  { name: "Катя Motion", avatar: "К", color: "from-orange-400 to-red-500" },
                  { name: "Дима UI", avatar: "Д", color: "from-gray-500 to-gray-600" },
                ].map((user, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 rounded opacity-50">
                    <div className={`w-8 h-8 bg-gradient-to-r ${user.color} rounded-full flex items-center justify-center relative flex-shrink-0`}>
                      <span className="text-white text-sm font-medium">{user.avatar}</span>
                      <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#747f8d] border-2 border-[#2f3136] rounded-full"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[#8e9297] text-sm font-medium truncate">{user.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
