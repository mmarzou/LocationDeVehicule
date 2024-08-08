<?php
// src/Controller/RecipeController.php
namespace App\Controller;

use App\Entity\Recipe;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class RecipeController extends AbstractController
{
    #[Route('/api/recipes', name: 'create_recipe', methods: ['POST'])]
    public function createRecipe(Request $request, EntityManagerInterface $entityManager): JsonResponse
    {
        try {
            $data = json_decode($request->getContent(), true);

            $recipe = new Recipe();
            $recipe->setTitle($data['title']);
            $recipe->setIngredient(implode(',', $data['ingredients']));
            $recipe->setDescription($data['description']);
            $recipe->setSteps(implode('.', $data['steps']));
            $recipe->setReleaseYear($data['releaseYear']);

            $entityManager->persist($recipe);
            $entityManager->flush();
            
            return new JsonResponse([
                'status' => 'Recipe created!',
                'data' => $data
            ], JsonResponse::HTTP_CREATED);
        } catch (\Exception $e) {
            return new JsonResponse(['error' => $e->getMessage()], JsonResponse::HTTP_INTERNAL_SERVER_ERROR);
        } catch (\Exception $e) {
            return new JsonResponse(['error' => $e->getMessage()], JsonResponse::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}