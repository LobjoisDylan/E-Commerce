<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;

use App\Entity\Commandes;

class CommandesController extends AbstractController
{
    public function getAllCommandes()
    {
        $encoders = [new XmlEncoder(), new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];

        $serializer = new Serializer($normalizers, $encoders);
        
        $repo = $this->getDoctrine()->getRepository(Commandes::class);
        $commandes = $repo->findAll();

        $jsonContent = $serializer->serialize($commandes, 'json');

        return new Response($jsonContent);
    }

    public function getTenLastCommandes()
    {
        $encoders = [new XmlEncoder(), new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];

        $serializer = new Serializer($normalizers, $encoders);
        
        $repo = $this->getDoctrine()->getRepository(Commandes::class);
        $commandes = $repo->findBy([], ['id' => 'DESC'], 10);

        $jsonContent = $serializer->serialize($commandes, 'json');

        return new Response($jsonContent);
    }
}