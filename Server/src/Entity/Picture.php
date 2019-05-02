<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Picture
 *
 * @ORM\Table(name="picture")
 * @ORM\Entity
 */
class Picture
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var int
     *
     * @ORM\Column(name="id_articles", type="integer", nullable=false)
     */
    private $idArticles;

    /**
     * @var string
     *
     * @ORM\Column(name="picture_name", type="string", length=255, nullable=false)
     */
    private $pictureName;

    /**
     * @var int
     *
     * @ORM\Column(name="primary_pic", type="integer", nullable=false)
     */
    private $primaryPic;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIdArticles(): ?int
    {
        return $this->idArticles;
    }

    public function setIdArticles(int $idArticles): self
    {
        $this->idArticles = $idArticles;

        return $this;
    }

    public function getPictureName(): ?string
    {
        return $this->pictureName;
    }

    public function setPictureName(string $pictureName): self
    {
        $this->pictureName = $pictureName;

        return $this;
    }

    public function getPrimaryPic(): ?int
    {
        return $this->primaryPic;
    }

    public function setPrimaryPic(int $primaryPic): self
    {
        $this->primaryPic = $primaryPic;

        return $this;
    }


}
