<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Doctrine\Common\Persistence\ObjectManager;
use App\Entity\UserInfos;
use App\Entity\Users;

class UsersController extends AbstractController
{
    public function getAllUsers()
    {
        $encoders = [new XmlEncoder(), new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];

        $serializer = new Serializer($normalizers, $encoders);

        $repo = $this->getDoctrine()->getRepository(Users::class);
        $user = $repo->findAll();

        $jsonContent = $serializer->serialize($user, 'json');

        return new Response($jsonContent);
    }

    public function getUsersById($id)
    {
        $encoders = [new XmlEncoder(), new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];

        $serializer = new Serializer($normalizers, $encoders);
        
        $repo = $this->getDoctrine()->getRepository(Users::class);
        $users = $repo->find($id);

        $jsonContent = $serializer->serialize($users, 'json');

        return new Response($jsonContent); 
    }

    public function getAddUser(Request $request, ObjectManager $manager)
    {
        $user = new Users();
        $userinfo = new UserInfos();

        $user->setPseudo($request->request->get("username"));
        $user->setEmail($request->request->get("email"));
        $user->setPassword($request->request->get("password"));
        $user->setToken(rand(0, 99999999));
        $user->setRole(1);

        $manager->persist($user);
        $manager->flush();

        $birthday = new \DateTime($request->request->get("birthday"));

        $userinfo->setIdUser($user->getId());
        $userinfo->setNewsletter(false);
        $userinfo->setLastname($request->request->get("lastname"));
        $userinfo->setFirstname($request->request->get("name"));
        $userinfo->setCivility($request->request->get("civilite"));
        $userinfo->setPostalCode(intval($request->request->get("postal")));
        $userinfo->setAddress($request->request->get("adresse"));
        $userinfo->setBirthdate($birthday);
        $userinfo->setCountry($request->request->get("country"));
        $userinfo->setPhone(intval($request->request->get("phone")));

        $manager->persist($userinfo);
        $manager->flush();

        return new Response( $user->getId());
    }

    public function getUserConnect(Request $request, ObjectManager $manager)
    {
        $encoders = [new XmlEncoder(), new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];

        $serializer = new Serializer($normalizers, $encoders);

        $repo = $this->getDoctrine()->getRepository(Users::class);
        $user = $repo->findOneBy([
            'email' => $request->request->get('email'),
            'password' => $request->request->get('password'),
        ]);

        $jsonContent = $serializer->serialize($user, 'json');
        return new Response($jsonContent);
    }

    public function UpdateUsers($id, Request $request, ObjectManager $manager)
    {
        $em = $this->getDoctrine()->getManager();
        $user = $em->getRepository(Users::class)->find($id);
        $user->setPseudo($request->request->get("pseudo"));
        $user->setEmail($request->request->get("email"));
        $user->setpassword($request->request->get("password"));

        $manager->persist($user);
        $manager->flush();

        return new Response($user->getId());
    }
}
