<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\QuotationRepository")
 */
class Quotation
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $servicetype;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $cleaningtype;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $propertyaddress;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $propertysize;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $bedrooms;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $bathrooms;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $bathtubs;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $sittingroom;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $diningroom;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $kitchen;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $oven;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $frequencycleaning;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $preferredtime;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $priority;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $preferreddate;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $requirementdetails;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $additionalinfo;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $fname;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $lname;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $gender;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $address;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $phone;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $preferedcontact;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $userfile;

    public function getId(): ?string
    {
        return $this->id;
    }

    public function getServicetype(): ?string
    {
        return $this->servicetype;
    }

    public function setServicetype(?string $servicetype): self
    {
        $this->servicetype = $servicetype;

        return $this;
    }

    public function getCleaningtype(): ?string
    {
        return $this->cleaningtype;
    }

    public function setCleaningtype(?string $cleaningtype): self
    {
        $this->cleaningtype = $cleaningtype;

        return $this;
    }

    public function getPropertyaddress(): ?string
    {
        return $this->propertyaddress;
    }

    public function setPropertyaddress(?string $propertyaddress): self
    {
        $this->propertyaddress = $propertyaddress;

        return $this;
    }

    public function getPropertysize(): ?string
    {
        return $this->propertysize;
    }

    public function setPropertysize(?string $propertysize): self
    {
        $this->propertysize = $propertysize;

        return $this;
    }

    public function getBedrooms(): ?string
    {
        return $this->bedrooms;
    }

    public function setBedrooms(?string $bedrooms): self
    {
        $this->bedrooms = $bedrooms;

        return $this;
    }

    public function getBathrooms(): ?string
    {
        return $this->bathrooms;
    }

    public function setBathrooms(?string $bathrooms): self
    {
        $this->bathrooms = $bathrooms;

        return $this;
    }

    public function getBathtubs(): ?string
    {
        return $this->bathtubs;
    }

    public function setBathtubs(?string $bathtubs): self
    {
        $this->bathtubs = $bathtubs;

        return $this;
    }

    public function getSittingroom(): ?string
    {
        return $this->sittingroom;
    }

    public function setSittingroom(?string $sittingroom): self
    {
        $this->sittingroom = $sittingroom;

        return $this;
    }

    public function getDiningroom(): ?bool
    {
        return $this->diningroom;
    }

    public function setDiningroom(?bool $diningroom): self
    {
        $this->diningroom = $diningroom;

        return $this;
    }

    public function getKitchen(): ?string
    {
        return $this->kitchen;
    }

    public function setKitchen(?string $kitchen): self
    {
        $this->kitchen = $kitchen;

        return $this;
    }

    public function getOven(): ?string
    {
        return $this->oven;
    }

    public function setOven(?string $oven): self
    {
        $this->oven = $oven;

        return $this;
    }

    public function getFrequencycleaning(): ?string
    {
        return $this->frequencycleaning;
    }

    public function setFrequencycleaning(?string $frequencycleaning): self
    {
        $this->frequencycleaning = $frequencycleaning;

        return $this;
    }

    public function getPreferredtime(): ?string
    {
        return $this->preferredtime;
    }

    public function setPreferredtime(?string $preferredtime): self
    {
        $this->preferredtime = $preferredtime;

        return $this;
    }

    public function getPriority(): ?string
    {
        return $this->priority;
    }

    public function setPriority(?string $priority): self
    {
        $this->priority = $priority;

        return $this;
    }

    public function getPreferreddate(): string
    {
        return $this->preferreddate;
    }

    public function setPreferreddate($preferreddate): self
    {
        $this->preferreddate = $preferreddate;

        return $this;
    }

    public function getRequirementdetails(): ?string
    {
        return $this->requirementdetails;
    }

    public function setRequirementdetails(?string $requirementdetails): self
    {
        $this->requirementdetails = $requirementdetails;

        return $this;
    }

    public function getAdditionalinfo(): ?string
    {
        return $this->additionalinfo;
    }

    public function setAdditionalinfo(?string $additionalinfo): self
    {
        $this->additionalinfo = $additionalinfo;

        return $this;
    }

    public function getFname(): ?string
    {
        return $this->fname;
    }

    public function setFname(?string $fname): self
    {
        $this->fname = $fname;

        return $this;
    }

    public function getLname(): ?string
    {
        return $this->lname;
    }

    public function setLname(?string $lname): self
    {
        $this->lname = $lname;

        return $this;
    }

    public function getGender(): ?bool
    {
        return $this->gender;
    }

    public function setGender(?bool $gender): self
    {
        $this->gender = $gender;

        return $this;
    }

    public function getAddress(): ?string
    {
        return $this->address;
    }

    public function setAddress(?string $address): self
    {
        $this->address = $address;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(?string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getPhone(): ?string
    {
        return $this->phone;
    }

    public function setPhone(?string $phone): self
    {
        $this->phone = $phone;

        return $this;
    }

    public function getPreferedcontact(): ?bool
    {
        return $this->preferedcontact;
    }

    public function setPreferedcontact(?bool $preferedcontact): self
    {
        $this->preferedcontact = $preferedcontact;

        return $this;
    }

    public function getUserfile(): ?string
    {
        return $this->userfile;
    }

    public function setUserfile(?string $userfile): self
    {
        $this->userfile = $userfile;

        return $this;
    }
}
