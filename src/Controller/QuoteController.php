<?php
/**
 * Created by PhpStorm.
 * User: SQLI
 * Date: 04/04/2019
 * Time: 16:56
 */

namespace App\Controller;

use App\Entity\Quotation;
use App\Form\QuotationType;
use App\Repository\QuotationRepository;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class QuoteController extends AbstractController
{
    private $em;

    private $form;

    private $repository;

    /**
     * QuoteController constructor.
     */
    public function __construct(ObjectManager $em, QuotationRepository $repository)
    {
        $this->repository = $repository;
        $this->em = $em;
    }

    /**
     * @Route("/quotation", defaults={"_format"="html"}, name="quote_index")
     *
     * NOTE: For standard formats, Symfony will also automatically choose the best
     * Content-Type header for the response.
     * See https://symfony.com/doc/current/quick_tour/the_controller.html#using-formats
     */
    public function index(string $_format): Response
    {
        // Every template name also has two extensions that specify the format and
        // engine for that template.
        // See https://symfony.com/doc/current/templating.html#template-suffix


        return $this->render('index.'.$_format.'.twig');

    }

    /**
     * @Route("/quotation/register", defaults={"_format"="html"}, name="quote_register")
     * @param Request $request
     * @return
     */
    public function register(string $_format, Request $request, \Swift_Mailer $mailer)
    {
        $quotation = new Quotation();

        $this->form = $this->createForm(QuotationType::class, $quotation, [
            'action' => $this->generateUrl('quote_register'),
        ]);

        $this->form->handleRequest($request);

        if ($this->form->isSubmitted() && $this->form->isValid()) {

            $quotation->setServicetype($request->request->get('servicetype'));
            $quotation->setCleaningtype($request->request->get('cleaningtype'));
            $quotation->setPropertyaddress($request->request->get('propertyaddress'));
            $quotation->setPropertysize($request->request->get('propertysize'));
            $quotation->setBedrooms($request->request->get('bedrooms'));
            $quotation->setBathrooms($request->request->get('bathrooms'));
            $quotation->setBathtubs($request->request->get('bathtubs'));
            $quotation->setSittingroom($request->request->get('sittingroom'));
            $quotation->setDiningroom($request->request->get('siningroom'));
            $quotation->setKitchen($request->request->get('kitchen'));
            $quotation->setOven($request->request->get('oven'));
            $quotation->setFrequencycleaning($request->request->get('frequencycleaning'));
            $quotation->setPreferredtime($request->request->get('preferredtime'));
            $quotation->setPriority($request->request->get('priority'));
            $quotation->setPreferreddate($request->request->get('preferreddate'));
            $quotation->setRequirementdetails($request->request->get('requirementdetails'));
            $quotation->setAdditionalinfo($request->request->get('additionalinfo'));
            $quotation->setFname($request->request->get('fname'));
            $quotation->setLname($request->request->get('lname'));
            $quotation->setGender($request->request->get('gender'));
            $quotation->setAddress($request->request->get('address'));
            $quotation->setEmail($request->request->get('email'));
            $quotation->setPhone($request->request->get('phone'));
            $quotation->setPreferedcontact($request->request->get('preferedcontact'));
            $quotation->setUserfile($request->request->get('userfile'));

            $this->em->persist($quotation);
            $this->em->flush();

            $message = (new \Swift_Message('Hello Email'))
                ->setFrom('it.fal.pro@gmail.com')
                ->setTo(['ayoublahbali12@gmail.com', $quotation->getEmail()])
                ->setBody(
                    $this->renderView(
                        'email/registration_details.html.twig',
                        ['quotation' => $quotation]
                    )
                    ,'text/html');


            $mailer->send($message);

            return $this->redirectToRoute('quote_show');
        }

        return $this->render('quotation.'.$_format.'.twig', ['form' => $this->form->createView()]);
    }

    /**
     * @Route("/quotation/show", defaults={"_format"="html"}, name="quote_show")
     */
    public function show(string $_format)
    {
        $quotations = $this->repository->findOneBy(['phone' => "0987654567"]);

        dump($quotations);
        die();
        return $this->render('show.'.$_format.'.twig', ['quotations' => $quotations]);

    }
}