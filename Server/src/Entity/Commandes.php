<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Commandes
 *
 * @ORM\Table(name="commandes")
 * @ORM\Entity
 */
class Commandes
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
     * @ORM\Column(name="id_user", type="integer", nullable=false)
     */
    private $idUser;

    /**
     * @var int|null
     *
     * @ORM\Column(name="id_article", type="integer", nullable=true)
     */
    private $idArticle;

    /**
     * @var int
     *
     * @ORM\Column(name="num_order", type="integer", nullable=false)
     */
    private $numOrder;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="estimate_date", type="date", nullable=false)
     */
    private $estimateDate;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="send_date", type="datetime", nullable=false, options={"default"="CURRENT_TIMESTAMP"})
     */
    private $sendDate = 'CURRENT_TIMESTAMP';

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="come_date", type="date", nullable=true)
     */
    private $comeDate;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIdUser(): ?int
    {
        return $this->idUser;
    }

    public function setIdUser(int $idUser): self
    {
        $this->idUser = $idUser;

        return $this;
    }

    public function getIdArticle(): ?int
    {
        return $this->idArticle;
    }

    public function setIdArticle(?int $idArticle): self
    {
        $this->idArticle = $idArticle;

        return $this;
    }

    public function getNumOrder(): ?int
    {
        return $this->numOrder;
    }

    public function setNumOrder(int $numOrder): self
    {
        $this->numOrder = $numOrder;

        return $this;
    }

    public function getEstimateDate(): ?\DateTimeInterface
    {
        return $this->estimateDate;
    }

    public function setEstimateDate(\DateTimeInterface $estimateDate): self
    {
        $this->estimateDate = $estimateDate;

        return $this;
    }

    public function getSendDate(): ?\DateTimeInterface
    {
        return $this->sendDate;
    }

    public function setSendDate(\DateTimeInterface $sendDate): self
    {
        $this->sendDate = $sendDate;

        return $this;
    }

    public function getComeDate(): ?\DateTimeInterface
    {
        return $this->comeDate;
    }

    public function setComeDate(?\DateTimeInterface $comeDate): self
    {
        $this->comeDate = $comeDate;

        return $this;
    }


}
