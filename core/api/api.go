package api

import "gogui/core/api/contrast"

type Api struct {
}

func (a Api)Contrast(src, dst string) ([]string, error) {
	return contrast.Contrast(src, dst)
}