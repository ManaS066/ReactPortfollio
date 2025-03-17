const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background py-8">
      <div className="container px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <a href="#home" className="text-xl font-bold text-primary">
              Manas Ranjan Pradhan<span className="text-primary">.</span>
            </a>
          </div>
          <div>
            <p className="text-center text-sm text-muted-foreground md:text-right">
              &copy; {currentYear}{" "}
              <a href="#" className="text-primary hover:underline">
                Manas
              </a>
              . All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

