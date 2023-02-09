<?php

namespace App\Service;

use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class FileUpLoader
{
    private $targetDirectory;

    public function __construct($targetDirectory)
    {
        $this->targetDirectory = $targetDirectory;
    }

    // public function getTargetDirectory()
    // {
    //    return $this->targetDirectory;
    // }

    public function upload($file)
    {
        if ($file instanceof UploadedFile) {
            $fileName = uniqid() . '.' . $file->guessExtension(); // uniqid() is a php method, will generate a unique id for the image file; '.' will be used for the image extension; ->guesExtension() will get the image extension of the image file

            try {
                $file->move($this->targetDirectory, $fileName); // move() is a symfony method
    
            } catch (FileException $e) {
                echo $e->getMessage();
            }
        } else {
            $fileName = $file;
        }
        
        return $fileName;
    }
}
