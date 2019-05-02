<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use App\Entity\Articles;
use App\Entity\Picture;
use Doctrine\Common\Persistence\ObjectManager;

class ArticlesController extends AbstractController
{
    public function getAllArticles()
    {
        $encoders = [new XmlEncoder(), new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];

        $serializer = new Serializer($normalizers, $encoders);

        $repo = $this->getDoctrine()->getRepository(Articles::class);
        $articles = $repo->findAll();

        $jsonContent = $serializer->serialize($articles, 'json');

        return new Response($jsonContent);
    }

    public function getAllArticlesById($id)
    {
        $encoders = [new XmlEncoder(), new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];

        $serializer = new Serializer($normalizers, $encoders);

        $repo = $this->getDoctrine()->getRepository(Articles::class);
        $articles = $repo->find($id);

        $jsonContent = $serializer->serialize($articles, 'json');

        return new Response($jsonContent);
    }

    public function getTenLast()
    {
        $encoders = [new XmlEncoder(), new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];

        $serializer = new Serializer($normalizers, $encoders);

        $repo = $this->getDoctrine()->getRepository(Articles::class);
        $articles = $repo->findBy([], ['id' => 'DESC'], 10);

        $jsonContent = $serializer->serialize($articles, 'json');

        return new Response($jsonContent);
    }

    public function addArticles(Request $request, ObjectManager $manager)
    {
        $article = new Articles();
        $picture = new Picture();
        $article->setIdCategory(intval($request->request->get("category")));
        $article->setIdSubcategory(intval($request->request->get("subcategory")));
        $article->setIdPromotions(1);
        $article->setName($request->request->get("name"));
        $article->setDescription($request->request->get("describe"));
        $article->setOrigin($request->request->get("origin"));
        $article->setStock(1);
        $article->setReference(intval($request->request->get("reference")));
        $article->setWeight(intval($request->request->get("weight")));
        $article->setBrand($request->request->get("brand"));
        $article->setPrice(intval($request->request->get("price")));

        $manager->persist($article);
        $manager->flush();

        $picture->setIdArticles($article->getId());
        $picture->setPictureName($request->request->get("picture"));
        $picture->setPrimaryPic(1);

        $manager->persist($picture);
        $manager->flush();


        return new Response( $article->getId());
    }

    public function UpdateArticle($id, Request $request, ObjectManager $manager)
    {
        $em = $this->getDoctrine()->getManager();
        $article = $em->getRepository(Articles::class)->find($id);
        $article->setIdCategory($request->request->get("category"));
        $article->setIdSubcategory($request->request->get("subcategory"));
        $article->setIdPromotions(1);
        $article->setName($request->request->get("name"));
        $article->setDescription($request->request->get("description"));
        $article->setOrigin($request->request->get("origin"));
        $article->setStock(1);
        $article->setReference(intval($request->request->get("reference")));
        $article->setWeight(intval($request->request->get("weight")));
        $article->setBrand($request->request->get("brand"));
        $article->setPrice(intval($request->request->get("price")));

        $manager->persist($article);
        $manager->flush();

        return new Response($article->getId());
    }

    public function DeleteArticle($id)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $articlebyid = $entityManager->getRepository(Articles::class)->find($id);
        $entityManager->remove($articlebyid);
        $entityManager->flush();
    }

    public function getArticleByFilter(Request $request)
    {
        $encoders = [new XmlEncoder(), new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);

        $repo = $this->getDoctrine()->getRepository(Articles::class);
        $query = $repo->createQueryBuilder('a')
                    ->where('a.idCategory = '. $request->request->get('category') .' and  a.name LIKE :title')
                    ->setParameter('title', '%'.$request->request->get('search').'%')
                    ->getQuery();

        $articles = $query->getResult();
        if(sizeof($articles) > 0 ) {
            foreach($articles as $article) {
                $result = $article->getId();
            }
            $jsonContent = $serializer->serialize($result, 'json');
            return new Response($jsonContent);
        }
        else {
            $result = "0";
            return new Response($result);
        }
    }
}
