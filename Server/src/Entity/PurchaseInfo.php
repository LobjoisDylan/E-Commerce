<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * PurchaseInfo
 *
 * @ORM\Table(name="purchase_info")
 * @ORM\Entity
 */
class PurchaseInfo
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
     * @var int
     *
     * @ORM\Column(name="card_number", type="integer", nullable=false)
     */
    private $cardNumber;

    /**
     * @var int
     *
     * @ORM\Column(name="expiration_date", type="integer", nullable=false)
     */
    private $expirationDate;

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

    public function getCardNumber(): ?int
    {
        return $this->cardNumber;
    }

    public function setCardNumber(int $cardNumber): self
    {
        $this->cardNumber = $cardNumber;

        return $this;
    }

    public function getExpirationDate(): ?int
    {
        return $this->expirationDate;
    }

    public function setExpirationDate(int $expirationDate): self
    {
        $this->expirationDate = $expirationDate;

        return $this;
    }


}
