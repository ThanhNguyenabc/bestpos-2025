import { Languages } from "@/utils/languages";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Text from "../ui/text";
import useLanguages from "@/hooks/useLanguage";

const LanguageToggle = () => {
  const { locale, changeLanguage } = useLanguages();
  const { icon: Icon } = Languages.get(locale) || {};

  const onPress = (locale: string) => {
    changeLanguage(locale);
  };

  const LanguagesArray = Object.values(Languages).map(
    ({ title, icon: Icon, locale }) => ({
      key: title,
      label: (
        <button
          onClick={() => onPress(locale)}
          className="inline-flex items-center gap-2"
        >
          <Text>{title} </Text>
        </button>
      ),
    })
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border border-neutral-300 rounded-lg p-3">
        <Icon />
      </DropdownMenuTrigger>
      <DropdownMenuContent></DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageToggle;
