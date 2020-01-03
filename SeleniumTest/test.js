describe('Protractor Demo App (Selenium test)', function() {
    it('should open the app home page', function() {
      browser.get("http://localhost:4200");
    });

    it('should have a title', function() {
      expect(browser.getTitle()).toEqual('AFF-ETUD');
    });
    it('should click on Acceuil button on the sidebar', function() {
      element(by.id('AcceuilPage')).click();
    });
    it('Redirect to the form page and fill the form', function() {
      element(by.id('etud')).click();
       browser.get("http://localhost:4200/forms");

       element(by.id('Nom')).sendKeys('Benbarek');
      expect(element(by.id('Nom')).getAttribute('value')).toBe('Benbarek');
       element(by.id('Prenom')).sendKeys('Bouchra');
      expect(element(by.id('Prenom')).getAttribute('value')).toBe('Bouchra');
       element(by.id('Matricul')).sendKeys('12/12');
      expect(element(by.id('Matricul')).getAttribute('value')).toBe('17/0155');
      element(by.id('Email')).sendKeys('hb_benbarek@esi.dz');
      expect(element(by.id('Email')).getAttribute('value')).toBe('hb_benbarek@esi.dz');
     // element(by.id('confirmer')).click();
      element(by.id('Code')).sendKeys('1111');
      expect(element(by.id('Code')).getAttribute('value')).toBe('1111');
      element(by.id('Choix1')).sendKeys('siq');
      expect(element(by.id('Choix1')).getAttribute('value')).toBe('siq');
      element(by.id('Choix2')).sendKeys('sil');
      expect(element(by.id('Choix2')).getAttribute('value')).toBe('sil');
      element(by.id('Choix3')).sendKeys('sit');
      expect(element(by.id('Choix3')).getAttribute('value')).toBe('sit');
      element(by.id('valider')).click(); // le code de confirmation est généré aleatoirement alors le resultat sera incorrect (pas de validation)
      browser.get("http://localhost:4200/acceuil");
      expect(browser.getTitle()).toEqual('AFF-ETUD');
    });
  
  });
