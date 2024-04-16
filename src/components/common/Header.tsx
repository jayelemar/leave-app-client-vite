import Logo from '@/components/common/Logo';

const Header = () => {
  return (
    <header className="mx-2 flex h-10 items-center justify-between px-2">
      <Logo
        containerStyles="mt-4 cursor-pointer text-black sm:mt-2"
        textStyles="sm:gap-2 flex flex-col text-lg sm:flex-row sm:text-2xl"
        spanStyles="text-primary"
      />
    </header>
  );
};

export default Header;
