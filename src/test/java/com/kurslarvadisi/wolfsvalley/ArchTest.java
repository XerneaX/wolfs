package com.kurslarvadisi.wolfsvalley;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.Test;

class ArchTest {

    @Test
    void servicesAndRepositoriesShouldNotDependOnWebLayer() {
        JavaClasses importedClasses = new ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("com.kurslarvadisi.wolfsvalley");

        noClasses()
            .that()
            .resideInAnyPackage("com.kurslarvadisi.wolfsvalley.service..")
            .or()
            .resideInAnyPackage("com.kurslarvadisi.wolfsvalley.repository..")
            .should()
            .dependOnClassesThat()
            .resideInAnyPackage("..com.kurslarvadisi.wolfsvalley.web..")
            .because("Services and repositories should not depend on web layer")
            .check(importedClasses);
    }
}
