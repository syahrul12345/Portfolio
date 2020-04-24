package main

import (
	"log"
	"os"

	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	e := godotenv.Load() //Load .env file
	if e != nil {
		log.Println(e)
		log.Println("Checking machine environment variables instead of in the .env file... this might be a production build")
		prod := os.Getenv("is_production")
		if prod != "" {
			log.Printf("Production status : %s\n", prod)
		} else {
			log.Println("Prudction status: False. Error reading environment variables")
		}

	}
	app := gin.Default()
	prod := os.Getenv("is_production")
	port := os.Getenv("port")

	if prod == "false" || prod == "" {
		// Build folder will be in the /apps/website/build.
		// We will build using a multistage docker build which will send the html files to this folder
		log.Println("Non-production build")
		app.Use(static.Serve("/", static.LocalFile("./website/build", true)))
	} else {
		// Non docker build, use the build outside of the folder. This will be in alpine linux
		log.Println("Production build")
		app.Use(static.Serve("/", static.LocalFile("./build", true)))
	}

	log.Printf("Webserver is on http://127.0.0.1:%s\n", port)
	app.Run(":" + port)
}
