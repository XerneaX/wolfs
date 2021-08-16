package com.kurslarvadisi.wolfsvalley.service.impl;

import com.kurslarvadisi.wolfsvalley.domain.Address;
import com.kurslarvadisi.wolfsvalley.repository.AddressRepository;
import com.kurslarvadisi.wolfsvalley.service.AddressService;
import java.util.List;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Service Implementation for managing {@link Address}.
 */
@Service
@Transactional
public class AddressServiceImpl implements AddressService {

    private final Logger log = LoggerFactory.getLogger(AddressServiceImpl.class);

    private final AddressRepository addressRepository;

    public AddressServiceImpl(AddressRepository addressRepository) {
        this.addressRepository = addressRepository;
    }

    @Override
    public Address save(Address address) {
        log.debug("Request to save Address : {}", address);
        return addressRepository.save(address);
    }

    @Override
    public Optional<Address> partialUpdate(Address address) {
        log.debug("Request to partially update Address : {}", address);

        return addressRepository
            .findById(address.getId())
            .map(
                existingAddress -> {
                    if (address.getStreetAddress() != null) {
                        existingAddress.setStreetAddress(address.getStreetAddress());
                    }
                    if (address.getPostalCode() != null) {
                        existingAddress.setPostalCode(address.getPostalCode());
                    }
                    if (address.getCity() != null) {
                        existingAddress.setCity(address.getCity());
                    }
                    if (address.getStateProvince() != null) {
                        existingAddress.setStateProvince(address.getStateProvince());
                    }
                    if (address.getCountry() != null) {
                        existingAddress.setCountry(address.getCountry());
                    }

                    return existingAddress;
                }
            )
            .map(addressRepository::save);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Address> findAll() {
        log.debug("Request to get all Addresses");
        return addressRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Address> findOne(Long id) {
        log.debug("Request to get Address : {}", id);
        return addressRepository.findById(id);
    }

    @Override
    public void delete(Long id) {
        log.debug("Request to delete Address : {}", id);
        addressRepository.deleteById(id);
    }
}
