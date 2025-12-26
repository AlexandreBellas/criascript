// A partir de um grafo criado, remova todos os nós que não se conectam a outros nós
package main

import (
	"fmt"
	"math/rand/v2"
)

var indexesToDelete = []int{}

func contains(s []int, e int) bool {
	for _, a := range s {
		if a == e {
			return true
		}
	}
	return false
}

func RunThroughAllNodes(graph [][]int) [][]int {
	for i := 0; i < len(graph); i++ {
		row := graph[i]
		hasNext := false
		for _, v := range row {
			if v == 1 {
				hasNext = true
				break
			}
		}

		if !hasNext {
			indexesToDelete = append(indexesToDelete, i)
		}
	}

	graphResponse := [][]int{}

	for i := 0; i < len(graph); i++ {
		for j := 0; j < len(graph[i]); j++ {
			if !contains(indexesToDelete, i) {

				// graphResponse = append(graphResponse, )
			}
		}
	}
}

func main() {
	numNodes := 10
	graph := make([][]int, numNodes)

	for i := 0; i < numNodes; i++ {
		row := make([]int, numNodes)
		graph[i] = row

		for j := 0; j < numNodes; j++ {
			if i != j {
				row[j] = rand.IntN(2)
			}
		}
	}

	fmt.Println("Antes")
	for _, row := range graph {
		fmt.Println(row)
	}

	RunThroughAllNodes(graph)

	fmt.Println("Depois")
	for _, row := range graph {
		fmt.Println(row)
	}
}
