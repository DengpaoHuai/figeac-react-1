import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, Mock } from "vitest";
import PlanetsScreen from "../../pages/PlanetsScreen";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

// Mock de useFetch
vi.mock("@tanstack/react-query");
vi.mock("react-router-dom");

describe("PlanetsList Component", () => {
  it("affiche 'Loading...' lorsque les données sont en cours de chargement", () => {
    // Simuler l'état de chargement
    (useQuery as Mock).mockReturnValue({
      isLoading: true,
      error: null,
      data: null,
    });

    (useNavigate as Mock).mockReturnValue({
      navigate: () => {},
    });

    render(<PlanetsScreen />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("affiche un message d'erreur lorsque le fetch échoue", () => {
    // Simuler une erreur
    (useQuery as Mock).mockReturnValue({
      loading: false,
      error: "Failed to fetch data",
      data: null,
    });

    render(<PlanetsScreen />);
    expect(screen.getByText("Failed to fetch data")).toBeInTheDocument();
  });

  it("affiche la liste des planètes lorsque les données sont chargées", () => {
    // Simuler des données de planètes
    (useQuery as Mock).mockReturnValue({
      loading: false,
      error: null,
      data: {
        count: 1,
        next: null,
        previous: null,
        results: [
          {
            name: "Tatooine",
            rotation_period: "23",
            orbital_period: "304",
            diameter: "10465",
            climate: "arid",
            gravity: "1 standard",
            terrain: "desert",
            surface_water: "1",
            population: "200000",
          },
        ],
      },
    });

    render(<PlanetsScreen />);
    expect(screen.getByText("Tatooine")).toBeInTheDocument();
  });
});
