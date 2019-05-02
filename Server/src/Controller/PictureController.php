<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;

use App\Entity\Picture;

class PictureController extends AbstractController
{
    public function getAllPicture()
    {
        $encoders = [new XmlEncoder(), new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];

        $serializer = new Serializer($normalizers, $encoders);
        
        $repo = $this->getDoctrine()->getRepository(Picture::class);
        $picture = $repo->findAll();

        $jsonContent = $serializer->serialize($picture, 'json');

        return new Response($jsonContent);
    }

    public function getAllArticlesById($id)
    {
        $encoders = [new XmlEncoder(), new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];

        $serializer = new Serializer($normalizers, $encoders);
        
        $repo = $this->getDoctrine()->getRepository(Picture::class);
        $picture = $repo->findBy(['idArticles' => $id]);

        $jsonContent = $serializer->serialize($picture, 'json');

        return new Response($jsonContent);
    }
}