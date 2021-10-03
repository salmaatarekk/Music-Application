

function deleteSong(id)
{
    return `delete from songs where id = ${id}`;
}

module.exports.deleteSong = deleteSong;