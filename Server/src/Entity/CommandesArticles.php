<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * CommandesArticles
 *
 * @ORM\Table(name="commandes_articles")
 * @ORM\Entity
 */
class CommandesArticles
{
    /**
     * @var int
     *
     * @ORM\Column(name="commandes_id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $commandesId;

    /**
     * @var int
     *
     * @ORM\Column(name="articles_id", type="integer", nullable=false)
     */
    private $articlesId;

    public function getCommandesId(): ?int
    {
        return $this->commandesId;
    }

    public function getArticlesId(): ?int
    {
        return $this->articlesId;
    }

    public function setArticlesId(int $articlesId): self
    {
        $this->articlesId = $articlesId;

        return $this;
    }


}
