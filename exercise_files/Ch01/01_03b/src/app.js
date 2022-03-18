async function getContact(contactId) {
  const resp = await $.ajax({
    url: `/contacts/${contactId}`,
    dataType: "json",
  });

  return {
    id: +resp.id,
    name: resp.name,
    birthDate: new Date(resp.birthDate),
  };
}

getContact(1).then((contact) => {
  contact.id = "testuser";
  contact.birthDate = "Unknown";
});
