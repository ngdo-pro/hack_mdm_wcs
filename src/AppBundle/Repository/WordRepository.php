<?php

namespace AppBundle\Repository;

/**
 * WordRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class WordRepository extends \Doctrine\ORM\EntityRepository
{
    public function searchWords($word){
        $word = $word."%";
        $qb= $this->createQueryBuilder('w')
            ->select('w.tag, w.id')
            ->where('w.tag LIKE :word')
            ->groupBy('w.tag')
            ->setParameter('word', $word)
            ->getQuery();
        return $qb->getResult();
    }
}
