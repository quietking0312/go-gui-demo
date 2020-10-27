package contrast

import (
	"fmt"
	"io/ioutil"
	"os"
	"regexp"
	"strings"
)

func Contrast(src, dst string) ([]string, error) {
	srcData, err := ReadLine(src)
	if err != nil {
		return nil, err
	}
	dstData, err := ReadLine(dst)
	if err != nil {
		return nil, err
	}
	srcKeyList := getKey(string(srcData))
	dstKeyList := getKey(string(dstData))
	var result []string
	for _, srcKey := range srcKeyList {
		var isA = false // srcKey 是否存在dstKeyList 中
		for _, dstKey := range dstKeyList {
			if srcKey == dstKey {
				isA = true
			}
		}
		if !isA {
			result = append(result, srcKey)
		}
	}
	return result, nil
}


func ReadLine(filePth string) ([]byte, error) {
	f, err := os.Open(filePth)
	if err != nil {
		return nil, err
	}
	return ioutil.ReadAll(f)
}

func getKey(data string) []string {
	reg := regexp.MustCompile(`\s(.*?):.*,`)
	if reg == nil {
		fmt.Println("regexp err")
		return nil
	}
	var res []string
	result := reg.FindAllStringSubmatch(data, -1)
	for _, args := range result {
		res = append(res, strings.TrimSpace(args[1]))
	}
	return res
}