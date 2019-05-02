<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;

use App\Entity\PurchaseInfos;

class PurchaseInfosController extends AbstractController
{
    public function getAllPurchaseInfos()
    {
        $encoders = [new XmlEncoder(), new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];

        $serializer = new Serializer($normalizers, $encoders);
        
        $repo = $this->getDoctrine()->getRepository(PurchaseInfos::class);
        $purchaseinfos = $repo->findAll();

        $jsonContent = $serializer->serialize($purchaseinfos, 'json');

        return new Response($jsonContent);
    }
}